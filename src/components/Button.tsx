import React from "react";
import Button from "@mui/material/Button";
import {SxProps,Theme} from "@mui/material";

type Props = {
    shape:any;
    sx? : SxProps<Theme>;
    content:React.ReactNode;
};

const BaseButton:React.FC<Props> = ({shape,sx,content}) => {
    return (
        <Button variant={shape} sx={sx}>{content}
        </Button>
    );
}


export default BaseButton;