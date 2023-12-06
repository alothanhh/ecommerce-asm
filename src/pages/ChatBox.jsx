// import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   TypingIndicator,
// } from "@chatscope/chat-ui-kit-react";
// import React, { useState, useEffect, useLayoutEffect } from "react";

// import {
//   Box,
//   Typography,
//   Drawer,
//   Avatar,
//   IconButton,
//   Toolbar,
//   List,
//   Divider,
//   Icon,
//   Modal,
//   Grid,
//   Switch,
// } from "@mui/material";
// import Button from "@mui/material/Button";
// import { Footer, Navbar } from "../components";

// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { useParams } from 'react-router-dom';
// import Alert, { AlertProps } from '@mui/material/Alert';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// const ChatBox = () => {
//   const [name, setName] = useState("");
//   const handleChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const [type, setType] = useState("Bút");
//   const handleChangeType = (e) => {
//     setType(e.target.value);
//   };

//   const [file, setFile] = useState("");
//   const [filePreview, setFilePreview] = useState();
//   const [error, setError] = useState("");

//     const handleFileChange = (e) => {
//         let selectedFile = e.target.files[0];
//     }
// console.log(selectedFile.type)
// let fileType = ['image/jpeg', 'image/png'];

//         if (selectedFile) {
//             //Type là jpg => sản phẩm không lỗi
//             if (selectedFile.type === 'image/jpeg') {
//                 setFilePreview(URL.createObjectURL(e.target.files[0]));
//                 setFile(selectedFile)
//                 setError('');
//             }
//             //Type là png => sản phẩm lỗi
//             else if (selectedFile.type === 'image/png') {
//                 setFilePreview(URL.createObjectURL(e.target.files[0]));
//                 setFile(selectedFile)
//                 setError('Sản phẩm của bạn bị lỗi');
//             }
//             //Import sai kiểu (không phải png/jpg)
//             else {
//                 setError('Vui lòng chọn đúng định dạng file hình ảnh');
//                 setFile('')
//             }
//         }
//         else {
//             setError('Vui lòng chọn file!');
//         }
//     }

//     return (
//         <>
//             <Navbar />
//             <div className="container my-3 py-3">
//                 <h1 className="text-center">Kiểm lỗi</h1>
//                 <hr />
//                 <h5 className="text-center fs-5 weight-light">Quý khách hàng vui lòng kiểm lỗi tại đây.</h5>
//                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
//                     <Box sx={{ margin: '5px', width: '30%' }}>
//                         <Typography sx={{ width: '100%', marginY: '10px', color: 'gray' }}>Chọn loại sản phẩm</Typography>
//                         <FormControl sx={{ width: '100%' }}>
//                             <Select
//                                 value={type}
//                                 onChange={handleChangeType}
//                                 defaultValue={'Bút'}
//                                 size='small'
//                             >
//                                 <MenuItem value={'Bút'}> Bút </MenuItem>
//                                 <MenuItem value={'Sổ tay'}> Sổ tay </MenuItem>
//                                 <MenuItem value={'Kỷ niệm chương'}> Kỷ niệm chương </MenuItem>
//                                 <MenuItem value={'Ly'}> Ly </MenuItem>
//                                 <MenuItem value={'Túi vải'}> Túi vải </MenuItem>
//                                 <MenuItem value={'Huy chương'}> Huy chương </MenuItem>
//                                 <MenuItem value={'Móc khóa'}> Móc khóa </MenuItem>
//                                 <MenuItem value={'Bình giữ nhiệt'}> Bình giữ nhiệt </MenuItem>
//                             </Select>
//                         </FormControl>
//                         <Typography sx={{ width: '100%', marginY: '10px', color: 'gray' }}>Tên sản phẩm</Typography>
//                         <TextField
//                             required
//                             value={name}
//                             onChange={handleChangeName}
//                             size='small'
//                             sx={{ marginRight: '10px', width: '100%' }}
//                             id="outlined-basic"
//                             variant="outlined"
//                             placeholder='Nhập tên sản phẩm'
//                         />
//                         <Box sx={{ mt: '15px', display: 'flex', flexDirection: 'column' }}>
//                             <Typography sx={{ width: '100%', color: 'gray' }}>File hình ảnh của sản phẩm</Typography>
//                             <Button
//                                 sx={{
//                                     backgroundColor: '#008272', color: 'white', fontSize: '16px', py: '6px',
//                                     textTransform: 'initial', px: '20px',
//                                     '&:hover': {
//                                         backgroundColor: '#008272',
//                                         color: 'white'
//                                     },
//                                 }}
//                                 component="label"
//                             >
//                                 Thêm file
//                                 <input
//                                     onChange={handleFileChange}
//                                     type="file"
//                                     hidden
//                                 />
//                             </Button>
//                             {file !== '' && error === '' ? <Box sx={{ mt: '15px' }}>
//                                 <img src={filePreview} alt='Error image' width='100%' />
//                                 <Typography sx={{ width: '100%', marginY: '10px', color: 'gray' }}>Tình trạng sản phẩm</Typography>
//                                 <Alert severity="success">Sản phẩm của bạn không bị lỗi</Alert>
//                             </Box> : null}
//                             {error !== '' && error === 'Vui lòng chọn đúng định dạng file hình ảnh' ? <Box sx={{ mt: '15px' }}>
//                                 <Alert severity="error">{error}</Alert>
//                             </Box> : null}
//                             {error !== '' && error === 'Sản phẩm của bạn bị lỗi' ? <Box sx={{ mt: '15px' }}>
//                                 <img src={filePreview} alt='Error image' width='100%' />
//                                 <Typography sx={{ width: '100%', marginY: '10px', color: 'gray' }}>Tình trạng sản phẩm</Typography>
//                                 <Alert severity="error">{error}</Alert>
//                             </Box> : null}
//                         </Box>
//                     </Box>
//                 </Box>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default ChatBox;
