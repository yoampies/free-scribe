import {pipeline} from '@xenova/transformers'
import { MessageTypes } from './presets'

class MyTranscriptionPipeline {
    static task = 'automatic-speech-recognition'
    static model = 'openai/whisper-tiny.en'
    static instance = null

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = await pipeline(this.task, null, {
                progress_callback
            })
        }

        return this.instance
    }
}

self.addEventListener('message', async (event) => {
    const { type, audio } = event.data
    if (type === MessageTypes.INFERENCE_REQUEST) {
        await transcribe(audio)
    } 
})

async function transcribe(audio) {
    sendLoadingMessage('Loading')
    let pipeline

    try {
        pipeline = await MyTranscriptionPipeline.getInstance(load_model_callback)
    } catch (error) {
        console.log(error.message)
    }

    sendLoadingMessage('Success')

    const stride_length_s = 5

    const generationTracker = new generationTracker(pipeline, stride_length_s)
    await pipeline(audio, {
        top_k: 0,
        so_sample: false,
        chunk_length: 30,
        stride_length_s,
        return_timestamps: true,
        callback_function: generationTracker.callbackFunction.bind(generationTracker),
        chunk_callback: generationTracker.chunk_Callback.bind(generationTracker)
    })
    
    generationTracker.sendFinalResult()

    //4:19:32
}