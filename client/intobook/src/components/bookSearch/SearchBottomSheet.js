import React, { useState } from 'react';
import SearchGroups from './SearchGroups';
import Modal from './../common/Modal';
import { searchIcon, barcodehIcon, bookshIcon } from '../../assets/img/search/searchBottomSheetImg';
import { SearchBottomeSheetDiv, Title, TopLine, Line } from '../../styles/bookSearch/SearchBottomSheetStyle';
import { SwipeableDrawer, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Barcode from './Barcode';

const SearchBottomSheet = ({ isOpen, setIsOpen }) => {
  const [openModal, setOpenModal] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [scannedBook, setScannedBook] = useState(null);

  const closeModal = () => {
    setOpenModal(false);
  };

  const addInBookShelvesHandler = () => {
    setIsOpen(false);
    setOpenModal(true);
  };
  
  const barcodeScannerHandler = () => {
    setIsOpen(false);
    setShowScanner(true);
  };

  return (
    <Box>
      <SwipeableDrawer anchor='bottom' open={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}
        BackdropProps={{
          style:
          {
            width: '100%', margin: 'auto'
          }
        }}
        PaperProps={{
          sx: {
            width: '100%', margin: 'auto', borderTopRightRadius: '20px', borderTopLeftRadius: '20px'
          }
        }}>
        <Stack width={'90%'} height={254} margin={'0 auto'}>
          <SearchBottomeSheetDiv>
            <Title>
              <span>읽을 책 등록하기</span>
            </Title>
            <TopLine />
            <Link to='/search' style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
              <SearchGroups iconSrc={searchIcon} methodText={'검색하여 등록하기'}></SearchGroups>
            </Link>
            <Line />
            <SearchGroups iconSrc={barcodehIcon} methodText={'바코드로 등록하기'} onClick={barcodeScannerHandler}></SearchGroups>
            <Line />
            <SearchGroups onClick={addInBookShelvesHandler} iconSrc={bookshIcon} methodText={'내 책장에서 등록하기'}></SearchGroups>
            <Line />
          </SearchBottomeSheetDiv>
        </Stack>
      </SwipeableDrawer>
      {showScanner && <Barcode setShowScanner={setShowScanner} setScannedBook={setScannedBook} setIsSheetOpen={setIsOpen} />}
      <Modal openModal={openModal} setOpenModal={setOpenModal} modalType={'readingBook'} closeModal={closeModal} height={'510px'} />
    </Box>
  );
};

export default SearchBottomSheet;