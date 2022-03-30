import React, { useEffect, useState, useCallback } from 'react';
import { Box, Paper, Table, TableBody, TableContainer, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import { BlueButton, ActionButton } from '../../../components/Buttons';
import { CategoryDialog } from '../../../components/Dialogs';

import { getCategories, createCategory, updateCategory, deleteCategory } from '../../../apis/category'
import { useAppContext } from '../../../context/AppContext';

function Category() {
  const { setLoading, setMessage, categories, setCategories } = useAppContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOpenDialog] = useState({ type: 'create', open: false });
  const [dialogData, setDialogData] = useState({
    title: '',
    file: null
  });

  const loadCategories = useCallback(() => {
    setLoading(true);
    getCategories().then(res => {
      setCategories(res);
      setLoading(false);
    }).catch(err => {
      setCategories([]);
      setMessage({ open: true, title: 'Error', description: 'Failed to load the categories.' });
      setLoading(false)
    });
  }, [setLoading, setMessage, setCategories]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const handleCreate = () => {
    setOpenDialog({ type: 'create', open: true });
    setDialogData({
      title: '',
      file: null
    });
  };

  const handleEdit = (item) => {
    setOpenDialog({ type: 'edit', open: true });
    setDialogData({ ...item, file: null });
  };

  const handleChangeDialog = (name, val) => {
    if (name === 'file') {
      setDialogData({ ...dialogData, [name]: val[0] });
    } else {
      setDialogData({ ...dialogData, [name]: val });
    }
  }

  const handleSave = () => {
    if (openDialog.type === 'create') {
      if (dialogData.title === '' || dialogData.file === null) {
        setMessage({ open: true, title: 'Warning', description: 'Please fill in the all data.' });
        return;
      } else {
        const formData = new FormData();
        formData.append('title', dialogData.title);
        formData.append('video', dialogData.file);
        setLoading(true);
        createCategory(formData).then(res => {
          loadCategories();
        }).catch(err => {
          setMessage({ open: true, title: 'Error', description: 'Failed to create the category.' });
          setLoading(false);
        });
      }
    } else {
      if (dialogData.title === '') {
        setMessage({ open: true, title: 'Warning', description: 'Please fill in the all data.' });
        return;
      } else {
        const formData = new FormData();
        formData.append('title', dialogData.title);
        if (dialogData.file) formData.append('video', dialogData.file);
        setLoading(true);
        updateCategory(dialogData.id, formData).then(res => {
          loadCategories();
        }).catch(err => {
          setMessage({ open: true, title: 'Error', description: 'Failed to update the category.' });
          setLoading(false);
        });
      }
    }

    setOpenDialog({ type: 'create', open: false });
  };

  const handleDelete = (id) => {
    setLoading(true);
    deleteCategory(id).then(res => {
      loadCategories();
    }).catch(err => {
      setMessage({ open: true, title: 'Error', description: 'Failed to delete the category.' });
      setLoading(false)
    });
  };

  return (
    <Box>
      <Box fontSize={16} fontWeight="fontWeightBold" mt={4}>Category management</Box>
      <Box display="flex" justifyContent="flex-end" alignContent="center" mb={6}>
        <BlueButton onClick={() => handleCreate()}>Create</BlueButton>
      </Box>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell width={200} align="center">Title</TableCell>
              <TableCell align="center">Teaser Video</TableCell>
              <TableCell width={100} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
              return (
                <TableRow hover role="checkbox" key={index}>
                  <TableCell width={200} align="center">{item.title}</TableCell>
                  <TableCell align="center">{item.video_path}</TableCell>
                  <TableCell width={100} align="center">
                    <Box display="flex" justifyContent="space-around">
                      <ActionButton onClick={() => handleEdit(item)}><Edit /></ActionButton>
                      <ActionButton onClick={() => handleDelete(item.id)}><Delete /></ActionButton>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={categories.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <CategoryDialog
        open={openDialog.open}
        type={openDialog.type}
        data={dialogData}
        onChange={(name, val) => handleChangeDialog(name, val)}
        onClose={() => setOpenDialog({ ...openDialog, open: false })}
        onFinish={() => handleSave()}
      />
    </Box>
  );
}

export default Category;
