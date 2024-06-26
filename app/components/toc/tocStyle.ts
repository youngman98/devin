'use client'
import style from 'styled-components'

export const TOCAside = style.aside`
  position: fixed;
  width: 240px;
  display: flex;
  margin-top: 3rem;
  padding-left: 10px;
  flex-direction: column;
  border-left: 2px solid #F1F3F5;
  right: 150px;
  & a {
    margin-top: 8px;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    opacity: 0.5;
    transition: opacity 0.5s ease;
    line-height: 1.5;

    &:hover {
      opacity: 1;
    }

    &[data-active='true'] {
      opacity: 0.8;
      font-size: 16px;
      font-weight: 400;
      transition: all 0.2s ease;
    }
  }
  @media (max-width: 1365px) {
    display: none;
  }
`