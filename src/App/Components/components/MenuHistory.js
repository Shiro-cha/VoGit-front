import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import IconButton from "@mui/material/IconButton"
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVert from '@mui/icons-material/MoreVert'
import MoveDown from '@mui/icons-material/MoveDown'
import Adjust from '@mui/icons-material/Adjust'
import Cancel from '@mui/icons-material/Cancel'

const StyledMenu = styled((props: MenuProps) => (
	<Menu
	elevation={0}
	anchorOrigin={{
		vertical: 'bottom',
		horizontal: 'right',
	}}
	transformOrigin={{
		vertical: 'top',
		horizontal: 'right',
	}}
	{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
				   minWidth: 180,
				   color:
				   theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
				   boxShadow:
				   'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
				   '& .MuiMenu-list': {
					   padding: '4px 0',
				   },
				   '& .MuiMenuItem-root': {
					   '& .MuiSvgIcon-root': {
						   fontSize: 18,
				   color: theme.palette.text.secondary,
				   marginRight: theme.spacing(1.5),
					   },
				   '&:active': {
					   backgroundColor: alpha(
						   theme.palette.primary.main,
						   theme.palette.action.selectedOpacity,
					   ),
				   },
				   },
	},
}));

export default function MenuHistory({nombre}) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	
	return (
		<div>
		<IconButton edge="end" aria-label="action"
		id="demo-customized-button"
		key={nombre.toString()}
		aria-controls={open ? 'demo-customized-menu' : undefined}
		aria-haspopup="true"
		aria-expanded={open ? 'true' : undefined}
		variant="contained"
		disableElevation
		onClick={handleClick}
		>
		<MoreVert />
		</IconButton>
		<StyledMenu
		id="demo-customized-menu"
		MenuListProps={{
			'aria-labelledby': 'demo-customized-button',
		}}
		anchorEl={anchorEl}
		open={open}
		onClose={handleClose}
		>
		<MenuItem onClick={handleClose} disableRipple>
		<MoveDown />
		Checkout
		</MenuItem>
		<Divider sx={{ my: 0.5 }} />
		<MenuItem onClick={handleClose} disabled={true} disableRipple>
		<Adjust /> 
		Switch
		</MenuItem>
		<MenuItem onClick={handleClose} disableRipple>
		<Cancel />
		Close
		</MenuItem>
		</StyledMenu>
		</div>
	);
}
