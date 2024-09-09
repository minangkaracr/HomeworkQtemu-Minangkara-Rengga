import React from 'react'
import ContentInfo from '../molecules/ContentInfo';

class InfoComponent extends React.Component {
    render() { 
        return (
            <>
            <ContentInfo
                title="Next Meetup"
                cardTitle="Awesome Meetup & Event"
                sub="25 January 2019"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum bibendum diam, sit amet tristique ante sollicitudin a. Vestibulum non ipsum nisi. In eu neque non diam sodales vestibulum vitae eget nibh. In in rhoncus enim, in posuere lorem. Mauris interdum sem mollis, imperdiet mi sed, sollicitudin enim. Proin aliquam est pharetra magna pellentesque laoreet. Ut et egestas felis, eget fringilla neque."
            />
            <ContentInfo
                title="About Meetup"
                sub="Twitter: @JakartaJS and we use the hashtag #jakartajs"
                desc="Come and meet other developer interested in the JavaScript and it's library in the Greater Jakarta Area"
            />
            </>
        );
    }
}
 
export default InfoComponent;