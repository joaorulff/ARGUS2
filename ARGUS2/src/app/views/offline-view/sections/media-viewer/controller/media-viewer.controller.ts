import * as d3 from 'd3';

export class MediaViewerController {

    public videos: { [name: string]: string } = {};
    public selectedVideo: string = '';
    public currentVideo!: HTMLVideoElement;

    // video container
    public videoContainer!: HTMLDivElement;
    public maxWidth: number = 0;
    public maxHeight: number = 0;

    // svg


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

    // public update_metadata( metadata: )

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
        video.controls = false;

        // saving ref
        this.currentVideo = video;

        video.onloadedmetadata = (response: any) => {

            let containerWidth: number = video.videoWidth;
            let containerHeight: number = video.videoHeight;
            let ratioFactor: number = 1.0;

            if( containerWidth > this.maxWidth ){

                do{ 
                    ratioFactor -= 0.01;
                    containerWidth = video.videoWidth * ratioFactor;
                    containerHeight = video.videoHeight * ratioFactor;
                }while( containerWidth > this.maxWidth && containerHeight > this.maxHeight );

            } else {

                do{ 
                    ratioFactor += 0.01;
                    containerWidth = video.videoWidth * ratioFactor;
                    containerHeight = video.videoHeight * ratioFactor;

                } while( containerWidth < this.maxWidth && containerHeight < this.maxHeight );

                containerWidth = video.videoWidth * (ratioFactor - 0.01);
                containerHeight = video.videoHeight * (ratioFactor - 0.01);

            }

            this.videoContainer.style.width = `${containerWidth}px`;
            this.videoContainer.style.height = `${containerHeight}px`;

            // attaching video to container
            this.videoContainer.append( video );

        };

        video.src = videoPath;

    }

    

    
}