import { useRef } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputBase, Select, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { BlueButton, GrayButton } from './Buttons';
import { useAppContext } from '../context/AppContext';
import config from '../config';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
  label: {
    width: '150px',
    marginRight: '10px',
  },
  fullWidth: {
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const StyledDialog = withStyles({
  root: {
    '& .MuiDialogTitle-root': {
      minWidth: '400px',
      padding: '30px 25px 20px 25px',
      '& h2': {
        fontSize: '1.25rem',
        minWidth: '16rem',
      },
    },
    '& .MuiDialogContent-root': {
      padding: '0 25px',
    },
    '& .MuiDialogActions-root': {
      padding: '30px 25px 30px 25px',
    },
  },
})(Dialog);

const CustomDialog = withStyles({
  root: {
    '& .MuiPaper-root': {
      width: '75%',
      maxWidth: '75%',
      height: '75%',
      maxHeight: '75%'
    },
    '& .MuiDialogContent-root': {
      padding: '25px 25px 50px 25px',
      overflow: 'hidden',

      '& video': {
        position: 'initial',
        height: '100%',
        minWidth: 'unset',
      },
    },
  },
})(Dialog);

const StyledInput = withStyles({
  root: {
    width: '100%',
    height: '36px',
    padding: '6px 16px',
    borderRadius: '6px',
    border: 'solid 2px #f0f0f0',
    backgroundColor: '#ffffff',
    fontSize: '16px',
    color: '#2e2e2e'
  },
})(InputBase);

const SelectInput = withStyles({
  root: {
    width: '100%',
    border: '1px solid #e2e2e1',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  input: {
    padding: '8px 15px'
  }
})(InputBase);

const MessageDialog = ({ open, title, description, onClose }) => (
  <StyledDialog
    open={open}
    onClose={onClose}
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{description}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <BlueButton onClick={onClose}>Ok</BlueButton>
    </DialogActions>
  </StyledDialog>
);

const CategoryDialog = ({ open, type, data, onChange, onClose, onFinish }) => {
  const classes = useStyles();
  const videoRef = useRef();

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{type === 'create' ? 'Create new category' : 'Update the category'}</DialogTitle>
      <DialogContent>
        <Box display="flex" alignContent="center" my={4}>
          <Box className={classes.label}>Title:</Box>
          <StyledInput value={data.title} onChange={e => onChange('title', e.target.value)} />
        </Box>
        <Box display="flex" alignContent="center" my={4}>
          <Box className={classes.label}>Teaser Video:</Box>
          <Box className={classes.fullWidth}>
            <p>{data.video_path ? data.video_path : data.file ? data.file.name : ''}</p>
            <input
              ref={videoRef}
              className="hidden"
              accept="video/mp4"
              type="file"
              onChange={e => onChange('file', e.target.files)}
            />
            <Box display="flex" justifyContent="flex-start">
              <GrayButton onClick={() => videoRef.current.click()}>Upload</GrayButton>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <BlueButton onClick={() => onFinish()}>{type === 'create' ? 'Create' : 'Update'}</BlueButton>
      </DialogActions>
    </StyledDialog>
  );
};

const VideoDialog = ({ open, type, data, onChange, onClose, onFinish }) => {
  const classes = useStyles();
  const imageRef = useRef();
  const videoRef = useRef();
  const { categories } = useAppContext();
  console.log(data)
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{type === 'create' ? 'Create new video' : 'Update the video'}</DialogTitle>
      <DialogContent>
        <Box display="flex" alignContent="center" my={4}>
          <Box className={classes.label}>Title:</Box>
          <StyledInput value={data.title} onChange={e => onChange('title', e.target.value)} />
        </Box>
        <Box display="flex" alignContent="center" my={4}>
          <Box className={classes.label}>Thumbnail:</Box>
          <Box className={classes.fullWidth}>
            <p>{data.thumb_file ? data.thumb_file.name : data.thumbnail ? data.thumbnail : ''}</p>
            <input
              ref={imageRef}
              className="hidden"
              accept="image/*"
              type="file"
              onChange={e => onChange('thumb_file', e.target.files)}
            />
            <Box display="flex" justifyContent="flex-start">
              <GrayButton onClick={() => imageRef.current.click()}>Upload</GrayButton>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignContent="center" my={4}>
          <Box className={classes.label}>Video file:</Box>
          <Box className={classes.fullWidth}>
            <p>{data.video_file ? data.video_file.name : data.video_path ? data.video_path : ''}</p>
            <input
              ref={videoRef}
              className="hidden"
              accept="video/mp4"
              type="file"
              onChange={e => onChange('video_file', e.target.files)}
            />
            <Box display="flex" justifyContent="flex-start">
              <GrayButton onClick={() => videoRef.current.click()}>Upload</GrayButton>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignContent="center" my={4}>
          <Box className={classes.label}>Upload date:</Box>
          <StyledInput type="date" value={data.upload_date} onChange={e => onChange('upload_date', e.target.value)} />
        </Box>
        <Box display="flex" alignContent="center" my={4}>
          <Box className={classes.label}>Video length:</Box>
          <StyledInput value={data.video_length} onChange={e => onChange('video_length', e.target.value)} />
        </Box>
        <Box display="flex" alignContent="center" my={4}>
          <Box className={classes.label}>Category:</Box>
          <Select
            native
            value={data.category_id}
            onChange={e => onChange('category_id', parseInt(e.target.value))}
            input={<SelectInput />}
          >
            {categories.map((item, index) => (
              <option key={`category-${index}`} value={item.id}>{item.title}</option>
            ))}
          </Select>
        </Box>
      </DialogContent>
      <DialogActions>
        <BlueButton onClick={() => onFinish()}>{type === 'create' ? 'Create' : 'Update'}</BlueButton>
      </DialogActions>
    </StyledDialog>
  );
};

const PlayerDialog = ({ open, data, onClose }) => {
  const classes = useStyles();

  return (
    <CustomDialog
      open={open}
    >
      <DialogTitle disableTypography>
        <Typography variant="h6">{data?.title}</Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {data ? (
          <video autoPlay loop controls>
            <source src={`${config.MEDIA_SERVER_URL}/${data.video_path}`} type="video/mp4" />
          </video>
        ) : null}
      </DialogContent>
    </CustomDialog>
  )
}

export { MessageDialog, CategoryDialog, VideoDialog, PlayerDialog, StyledDialog, StyledInput, SelectInput };
