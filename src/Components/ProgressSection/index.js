import React, { useState, useEffect, useRef } from 'react'
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

        // if (photos.length % 5 + 3 > 0) {
        //     numberOfColumns++;
        // }

        let index = 0;
        for (let i = 0; i < photos.length; i++) {
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