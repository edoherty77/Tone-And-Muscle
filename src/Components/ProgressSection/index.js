import "../../Styles/styles.css";
import {
  SectionContainer,
  Photos,
  PhotoContainer,
  Photo,
  TextContainer,
  Text,
  CTA,
} from "./ProgressElements";

function ProgressSection() {
  return (
    <SectionContainer>
      <Photos>
        <PhotoContainer>
          <Photo src="/images/photo1.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo2.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo3.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo4.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo5.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo6.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo7.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo8.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo10.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo11.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo12.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo13.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo14.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo15.jpg" />
        </PhotoContainer>
        <PhotoContainer className="photo16">
          <Photo src="/images/photo16.jpg" />
        </PhotoContainer>
        <PhotoContainer>
          <Photo src="/images/photo17.jpg" />
        </PhotoContainer>
      </Photos>
      <TextContainer>
        <Text>Want results like this?</Text>
        <CTA>Apply Below</CTA>
      </TextContainer>
    </SectionContainer>
  );
}

export default ProgressSection;
