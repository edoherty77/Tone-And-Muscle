import React, { useState, useEffect, useRef } from 'react'
import {
    Container,
    Header,
    PhotoContainer,
    Row,
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
        let numberOfColumns = 4;

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
        console.log(modified_collection)
    }

    return (
        <Container>
            <Header>Tone and Muscle Academy</Header>
            <PhotoContainer>
                {modified_collection.map((row, index) => (
                    <div key={index} style={{border: '1px solid red'}}>
                        {row.map((col, index) => (
                            <div key={index} style={{overflowX: 'auto'}}>
                                <div>
                                    <Photo src={col.default}/>

                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                
            </PhotoContainer>
        </Container>
    )
}

export default ProgressSection