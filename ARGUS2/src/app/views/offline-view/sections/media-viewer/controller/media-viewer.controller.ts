import * as d3 from 'd3';

export class MediaViewerController {

    public videos: { [name: string]: string } = {};
    public selectedVideo: string = '';
    public currentVideo!: HTMLVideoElement;

    // video container
    public videoContainer!: HTMLDivElement;
    public maxWidth: number = 0;
    public maxHeight: number = 0;
    public ratioFactor: number = 0;

    // metadata
    public boundingBoxes: { [timestamp: number] : { label: string, top: number, left: number, bottom: number, right: number }[] } = {};

    // svg
    public svg!: d3.Selection<any, any, any, any>;

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

    public update_metadata_timestamp( timestamp: number ): void {

        const bbs: any[] = timestamp ? this.boundingBoxes[timestamp] : [];

        this.svg
            .selectAll('.boundingbox')
            .data( bbs )
            .join(
                (enter: any) => enter
                    .append('rect')
                    .attr('x', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.left*this.currentVideo.videoWidth*this.ratioFactor )
                    .attr('y', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.top*this.currentVideo.videoHeight*this.ratioFactor )
                    .attr('class', 'boundingbox')
                    .attr('width', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.right*this.currentVideo.videoWidth*this.ratioFactor - bb.left*this.currentVideo.videoWidth*this.ratioFactor )
                    .attr('height', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.bottom*this.currentVideo.videoHeight*this.ratioFactor - bb.top*this.currentVideo.videoHeight*this.ratioFactor  )
                    .attr('fill', 'transparent')
                    .attr('stroke', 'red')
                    .attr('stroke-width', 5),
                (update: any) => update
                    .attr('x', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.left*this.currentVideo.videoWidth*this.ratioFactor )
                    .attr('y', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.top*this.currentVideo.videoHeight*this.ratioFactor )
                    .attr('width', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.right*this.currentVideo.videoWidth*this.ratioFactor - bb.left*this.currentVideo.videoWidth*this.ratioFactor )
                    .attr('height', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.bottom*this.currentVideo.videoHeight*this.ratioFactor - bb.top*this.currentVideo.videoHeight*this.ratioFactor  ),
                (exit: any) => exit.remove()
            )

        this.svg
            .selectAll('.label')
            .data( bbs )
            .join(
                (enter: any) => enter
                    .append('text')
                    .attr('class', 'label')
                    .text( (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.label )
                    .attr('x', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.left*this.currentVideo.videoWidth*this.ratioFactor )
                    .attr('y', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.top*this.currentVideo.videoHeight*this.ratioFactor )
                    .style('font-size', `25px`)
                    .style('fill', 'white'),
                (update: any) => update
                    .attr('class', 'label')
                    .text( (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.label )
                    .attr('x', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.left*this.currentVideo.videoWidth*this.ratioFactor )
                    .attr('y', (bb: { label: string, top: number, left: number, bottom: number, right: number } ) => bb.top*this.currentVideo.videoHeight*this.ratioFactor ),
                (exit: any) => exit.remove()
            )

    }

    public update_metadata( boundingBoxes: { [timestamp: number] : { label: string, top: number, left: number, bottom: number, right: number }[] }  ): void {
        this.boundingBoxes = boundingBoxes;
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
        video.controls = false;

        // saving ref
        this.currentVideo = video;

        video.onloadedmetadata = (response: any) => {

            let containerWidth: number = video.videoWidth;
            let containerHeight: number = video.videoHeight;
            let ratioFactor: number = 1.0;

            if( containerWidth > this.maxWidth || containerHeight > this.maxHeight ){

                do{ 
                    ratioFactor -= 0.01;
                    containerWidth = video.videoWidth * ratioFactor;
                    containerHeight = video.videoHeight * ratioFactor;

                }while( containerWidth > this.maxWidth || containerHeight > this.maxHeight );

            } else {

                do{ 
                    ratioFactor += 0.01;
                    containerWidth = video.videoWidth * ratioFactor;
                    containerHeight = video.videoHeight * ratioFactor;

                } while( containerWidth <= this.maxWidth && containerHeight <= this.maxHeight );

                containerWidth = video.videoWidth * (ratioFactor - 0.01);
                containerHeight = video.videoHeight * (ratioFactor - 0.01);

                
            }

            this.ratioFactor = ratioFactor;
            this.videoContainer.style.position = 'relative';
            this.videoContainer.style.width = `${containerWidth}px`;
            this.videoContainer.style.height = `${containerHeight}px`;
            this.videoContainer.style.backgroundColor = 'red';

            this.svg = d3.select( this.videoContainer )
                .append('svg')
                .attr('top', 0)
                .attr('left', 0)
                .attr('width', containerWidth)
                .attr('height', containerHeight)
                .style('position', 'absolute');

            // attaching video to container
            this.videoContainer.append( video );

        };

        video.src = videoPath;

    }
    
}