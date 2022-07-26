import React, { useState, useEffect } from 'react'
import {
    SectionContainer,
    Header,
    Photos,
    PhotoContainer,
    HeaderContainer,
    Photo
} from './ProgressElements'

let listOfImages = []

function ProgressSection() {
    const [photos, setPhotos] = useState([])
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      })
    
      useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
      }, [])

    const importAll = (r) => {
        return r.keys().map(r)
    }

    useEffect(() => {
       listOfImages = importAll(require.context('./Photos/',false,/.(JPG)$/))
       setPhotos(listOfImages)
    }, [])

    let modified_collection = [];

    if (photos.length > 0) {
        let numberOfColumns = 3;
        let remainder = 0;

        if(windowSize.width <= 600){
            numberOfColumns = 2
        }

        if (photos.length % numberOfColumns > 0) {
            remainder = photos.length % numberOfColumns
            console.log(remainder)
        }

        let index = 0;
        for (let i = 0; i < photos.length - remainder; i++) {
            if (index % numberOfColumns == 0) {
                index = 0;
            }

            if (!modified_collection[index]) {
                modified_collection[index] = [];
            }

            modified_collection[index].push(photos[i]);
            index++;
        }
    }

    return (
        <SectionContainer>
            <HeaderContainer>
                <Header>Tone and Muscle Academy</Header>
            </HeaderContainer>
            <Photos>
                {modified_collection.map((row, index) => (
                    <div key={index}>
                        {row.map((col, index) => (
                            <PhotoContainer key={index}>
                                <Photo src={col.default}/>
                            </PhotoContainer>
                        ))}
                    </div>
                ))}
            </Photos>
        </SectionContainer>
    )
}

export default ProgressSection