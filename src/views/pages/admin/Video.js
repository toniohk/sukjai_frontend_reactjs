import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Table, TableBody, TableContainer, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import { BlueButton, ActionButton } from '../../../components/Buttons';
import { VideoDialog } from '../../../components/Dialogs';

import { getAllMedias, createMedia, updateMedia, deleteMedia } from '../../../apis/video'
import { useAppContext } from '../../../context/AppContext';
import config from '../../../config';

const useStyles = makeStyles(() => ({
  image: {
    width: 50,
    height: 50
  },
}));

function Video() {
  const classes = useStyles();
  const { setLoading, setMessage, categories, getCategoryName, videos, setVideos } = useAppContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOpenDialog] = useState({ type: 'create', open: false });
  const [dialogData, setDialogData] = useState({
    title: '',
    thumb_file: null,
    video_file: null,
    upload_date: '',
    video_length: '',
    category_id: categories[0]?.id || '',
  });

  const loadVideos = useCallback(() => {
    setLoading(true);
    getAllMedias().then(res => {
      setVideos(res);
      setLoading(false);
    }).catch(err => {
      setVideos([]);
      setMessage({ open: true, title: 'Error', description: 'Failed to load the videos.' });
      setLoading(false)
    });
  }, [setLoading, setMessage, setVideos]);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

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
      thumb_file: null,
      video_file: null,
      upload_date: '',
      video_length: '',
      category_id: categories[0]?.id || ''
    });
  };

  const handleEdit = (item) => {
    setOpenDialog({ type: 'edit', open: true });
    setDialogData({ ...item, thumb_file: null, video_file: null });
  };

  const handleChangeDialog = (name, val) => {
    if (['thumb_file', 'video_file'].includes(name)) {
      setDialogData({ ...dialogData, [name]: val[0] });
    } else {
      setDialogData({ ...dialogData, [name]: val });
    }
  }

  const handleSave = () => {
    if (openDialog.type === 'create') {
      if (dialogData.title === '' || dialogData.thumb_file === null || dialogData.video_file === null || dialogData.upload_date === '' || dialogData.video_length === '' || dialogData.category_id === '') {
        setMessage({ open: true, title: 'Warning', description: 'Please fill in the all data.' });
        return;
      } else {
        const formData = new FormData();
        formData.append('title', dialogData.title);
        formData.append('thumbnail', dialogData.thumb_file);
        formData.append('video', dialogData.video_file);
        formData.append('upload_date', dialogData.upload_date);
        formData.append('video_length', dialogData.video_length);
        formData.append('category_id', dialogData.category_id);
        setLoading(true);
        createMedia(formData).then(res => {
          loadVideos();
        }).catch(err => {
          setMessage({ open: true, title: 'Error', description: 'Failed to create the video.' });
          setLoading(false);
        });
      }
    } else {
      if (dialogData.title === '' || dialogData.upload_date === '' || dialogData.video_length === '') {
        setMessage({ open: true, title: 'Warning', description: 'Please fill in the all data.' });
        return;
      } else {
        const formData = new FormData();
        formData.append('title', dialogData.title);
        formData.append('upload_date', dialogData.upload_date);
        formData.append('video_length', dialogData.video_length);
        formData.append('category_id', dialogData.category_id);
        if (dialogData.thumb_file) formData.append('thumbnail', dialogData.thumb_file);
        if (dialogData.video_file) formData.append('video', dialogData.video_file);
        setLoading(true);
        updateMedia(dialogData.id, formData).then(res => {
          loadVideos();
        }).catch(err => {
          setMessage({ open: true, title: 'Error', description: 'Failed to update the video.' });
          setLoading(false);
        });
      }
    }

    setOpenDialog({ type: 'create', open: false });
  };

  const handleDelete = (id) => {
    setLoading(true);
    deleteMedia(id).then(res => {
      loadVideos();
    }).catch(err => {
      setMessage({ open: true, title: 'Error', description: 'Failed to delete the video.' });
      setLoading(false)
    });
  };

  return (
    <Box>
      <Box fontSize={16} fontWeight="fontWeightBold" mt={4}>Video management</Box>
      <Box display="flex" justifyContent="flex-end" alignContent="center" mb={6}>
        <BlueButton onClick={() => handleCreate()}>Create</BlueButton>
      </Box>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell width={200} align="center">Title</TableCell>
              <TableCell align="center">Thumbnail</TableCell>
              <TableCell align="center">Video</TableCell>
              <TableCell width={150} align="center">Upload date</TableCell>
              <TableCell width={150} align="center">Video length</TableCell>
              <TableCell width={200} align="center">Category</TableCell>
              <TableCell width={100} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
              return (
                <TableRow hover role="checkbox" key={index}>
                  <TableCell width={200} align="center">{item.title}</TableCell>
                  <TableCell align="center">
                    <img className={classes.image} src={`${config.MEDIA_SERVER_URL}/${item.thumbnail}`} alt="thumbnail" />
                  </TableCell>
                  <TableCell align="center">{item.video_path}</TableCell>
                  <TableCell width={150} align="center">{item.upload_date}</TableCell>
                  <TableCell width={150} align="center">{item.video_length}</TableCell>
                  <TableCell width={200} align="center">{getCategoryName(item.category_id)}</TableCell>
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
        count={videos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <VideoDialog
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

export default Video;
