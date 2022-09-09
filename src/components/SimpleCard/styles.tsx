import styled from '@emotion/styled'

export const SimpleCardWrapper = styled.div`
  --card-gradient: rgba(0, 0, 0, 0.8);
  --card-gradient: #C40A3D, #FB8D19;

  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  background-image: linear-gradient(
    var(--card-gradient),
    white max(9.5rem, 27vh)
  );
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .image-container {

    width: 100%;
  
    > div {
      position: unset !important;
    }
  
    .image {
        object-fit: contain;
        width: 100% !important;

        border-radius: 0.5rem 0.5rem 0 0;
        height: max(10rem, 25vh) !important;
        max-height: max(10rem, 30vh);
        aspect-ratio: 4/3;
        mix-blend-mode: var(--card-blend-mode);

        ~ * {
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
  }


  &:hover,
  &:focus-within {
    --card-gradient: #8cc540 max(8.5rem, 20vh);
  }

h3 {
  margin-top: 1rem;
  font-size: 1.25rem;
}

`