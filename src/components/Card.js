import React from "react";
import styled from "styled-components";

const Card = ({ imageSrc, title, description, price }) => {
  return (
    <CardContainer>
      <ImageDiv>
        <CardImage src={imageSrc} alt={title} />
      </ImageDiv>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>${price}</CardPrice>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  border: 1px solid #e1e1e1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 1.4rem;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: fill;
  align-items: center;
`;
const ImageDiv = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
    overflow: auto;
  }
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  &:hover {
    background-color: #f1f3f6;
    border-radius: 15px;
  }
`;

const CardDescription = styled.p`
  margin: 10px 0;
  height: 64px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  &:hover {
    background-color: #f1f3f6;
    border-radius: 15px;
  }
`;

const CardPrice = styled.p`
  font-weight: bold;
  margin: 0;
  &:hover {
    background-color: #f1f3f6;
    border-radius: 15px;
  }
`;
