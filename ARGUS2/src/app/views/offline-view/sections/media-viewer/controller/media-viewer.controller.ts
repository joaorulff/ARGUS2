export class MediaViewerController {

    public videos: { [name: string]: string } = {};
    public selectedVideo: string = '';
    public currentVideo!: HTMLVideoElement;

    // video container
    public videoContainer!: HTMLDivElement;
    public maxWidth: number = 0;
    public maxHeight: number = 0;

    constructor(){}

    public initialize_component( videoContainer: HTMLDivElement ): void {
        this.videoContainer = videoContainer;

        this.maxWidth = videoContainer.parentElement!.offsetWidth;
        this.maxHeight = videoContainer.parentElement!.offsetHeight;

    }

    public update_video_timestamp( timestamp: number ): void {

        if( this.currentVideo ){
            this.currentVideo.currentTime = timestamp;
        }
    }

    public update_videos( videos: { [name: string]: string } ): void {
        this.videos = videos;
        this.select_video( videos['main'] );
    }

    public select_video( videoPath: string ): void {
        this.selectedVideo = videoPath;
        this.create_video_tag( videoPath )
    }

    public clear_video_container(): void {
        while (this.videoContainer.firstChild) {
            this.videoContainer.removeChild(this.videoContainer.firstChild);
        }
    }

    public create_video_tag( videoPath: string ): void {

        // clearing
        this.clear_video_container();

        const video: HTMLVideoElement = document.createElement('video');
        video.style.width = '100%';
        video.style.height = '100%';

        // controls
        // video.controls = true;

        // saving ref
        this.currentVideo = video;

        video.onloadedmetadata = (response: any) => {


            const width: number = video.videoWidth;
            const height: number = video.videoHeight;
            
            let containerWidth: number = 0;
            let containerHeight: number = 0;
            let ratio: number = 0;

            // TODO: Make sure this scaling is working correctly

            containerWidth = this.maxWidth;
            ratio = width/this.maxWidth;
            containerHeight = (ratio < 0) ? this.maxHeight*ratio: this.maxHeight/ratio;

            // if it didn't fit. Try to fit the inverse.
            if( containerHeight > this.maxHeight ){ 

                containerHeight = this.maxHeight;
                ratio = height/this.maxHeight;
                // containerWidth = this.maxWidth*ratio;
                containerWidth = (ratio < 0) ? this.maxWidth/ratio : this.maxWidth*ratio;

            }

            this.videoContainer.style.width = `${containerWidth}px`;
            this.videoContainer.style.height = `${containerHeight}px`;

            // attaching video to container
            this.videoContainer.append( video );

        };

        video.src = videoPath;

    }

    

    
}