import React from "react";
import Skeleton from "react-skeleton-loading";
import styled from "styled-components";

const DivStyled = styled.div`
  border-radius: 0.5rem;
  background-color: var(--cl-elements);
  box-shadow: 0px 4px 12px 0px hsla(200, 15%, 8%, 0.04);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 16px 0px hsla(200, 15%, 8%, 0.08);
  }

  .country-flag {
    overflow: hidden;
    border-radius: 0.5rem 0.5rem 0 0;
    span {
      border-radius: 0;
      line-height: initial;
    }
  }

  .country-info {
    padding: 1.5rem;
    span {
      margin-bottom: 0.5rem !important;
    }
    span:first-of-type {
      margin-bottom: 1rem;
    }
  }
`;

const SkeletonCard = () => {
  return (
    <DivStyled>
      <div className="country-flag">
        <Skeleton height={180} />
      </div>
      <div className="country-info">
        <Skeleton height={30} className="skeleton-h2" />
        <Skeleton count={3} className="skeleton-p" />
      </div>
    </DivStyled>
  );
};

export default SkeletonCard;
