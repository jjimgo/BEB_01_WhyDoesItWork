import { useState } from 'react';
import styled from 'styled-components';

export const MenuBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
  /* addition below */
  height: fit-content;
  width: fit-content;
  /* addition upper */
`;

export const Menu = () => {

    return (
        <div className='Menu'>
            <MenuBtn>
                Menu
            </MenuBtn>
        </div>
    );
};