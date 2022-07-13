import React from "react";
import Button from "@mui/material/Button";
import {SxProps,Theme} from "@mui/material";
import {Link} from "react-router-dom";

type Props = {
    shape:any;
    sx? : SxProps<Theme>;
    content:React.ReactNode;
    to :string;
};

const BaseButtonRouter:React.FC<Props> = ({to,shape,sx,content}) => {
    return (
        <Button component={Link} to={to} variant={shape} sx={sx}>{content}
        </Button>
    );
}


export default BaseButtonRouter;