import Menu from 'components/Menu/Menu';
import styled from 'styled-components';

// const Headerr = styled.header``;

const Header = ({ setSelectedBlock, modules, selectedBlock }) => {
  return (
    <header
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <Menu setSelectedBlock={setSelectedBlock} modules={modules} selectedBlock={selectedBlock}/>
    </header>
  );
};

export default Header;
