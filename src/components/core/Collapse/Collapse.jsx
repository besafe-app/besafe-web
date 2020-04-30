import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './Collapse.style';

const Collapse = ({ children, title, open }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <S.CollapseWrapper isOpen={isOpen}>
      <S.TitleWrapper role="button" onClick={() => setIsOpen(!isOpen)}>
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>
      <S.Content>
        {children}
      </S.Content>
    </S.CollapseWrapper>
  );
};

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

Collapse.defaultProps = {
  open: false,
};

export default Collapse;
