import * as React from 'react';
import Drawer_dashboard from "../components/Drawer_dashboard";
import {GridColDef,DataGrid} from "@mui/x-data-grid";
import styles from "../css/Dashboard_VC.module.css";
import {Button, TextField,Box} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const columns: GridColDef[] = [
    {field:"id",headerName:"ID",width:70},
    {field:"channelName",headerName:"Channel",width:130},
    {field:"categoryName",headerName:"Category",width:130},
    {field:"vcName",headerName:"VCName",width:130},
    {field:"vcLimit",headerName:"VCLimit",width:70}
];

const data = [
    {id:1,channelName:"CreateVC1",categoryName:"Enjoy",vcName:"enjoy-vc",vcLimit:3},
    {id:2,channelName:"CreateVC2",categoryName:"Rank",vcName:"rank-vc",vcLimit:3},
    {id:3,channelName:"CreateVC3",categoryName:"Free",vcName:"free-vc",vcLimit:10}
];

let newvalue = {id:1,channelName:"",categoryName:"",vcName:"",vcLimit:1};

const DashboardVC = () => {
    const [rows,setRows] = React.useState(data);

    const addData = () => {
        const id =(rows.length == 0)? 1 : Math.max(...rows.map(v => v.id)) + 1;
        const data = Object.assign({},newvalue);
        data.id=id;
        setRows([...rows,data]);
    }

    const changeNewData = (data:any,property:string) => {
        switch (property) {
            case "ChannelName":
                newvalue.channelName=data;
                break;
            case "CategoryName":
                newvalue.categoryName=data;
                break;
            case "VCName":
                newvalue.vcName=data;
                break;
            case "VCLimit":
                newvalue.vcLimit=data;
                break;
        }
    }

    let selectrows = React.useRef([] as any[]);

    const deletedata = () => {
        if(selectrows.current.length===0)return;
        const newDatas = rows.filter(d => selectrows.current.indexOf(d.id)===-1);
        setRows(newDatas);
    }

    return (
        <React.Fragment>
            <div>
                <Drawer_dashboard>
                    <div>
                        <h1>VoiceChannel Settings</h1>
                        <div className={styles.main_sentence}>
                            <a>You can configure VoiceChannel Settings here.</a>
                        </div>
                        <div>
                            <div style={{}}>
                                <Box component={"form"}
                                     noValidate autoComplete={"off"}
                                     sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },position:"relative",margin:"15px 10px 10px 15px",padding:"2em 2em",borderRadius:"10px",border:"3px solid white",boxShadow:"rgb(145 158 171 / 24%) -24px 24px 72px -8px"}}>
                                    <TextField required
                                               id={"outlined-required"}
                                               label={"ChannelName"}
                                               defaultValue={"ChannelName"}
                                               onChange={(event) => changeNewData(event.target.value,"ChannelName")}
                                    />
                                    <TextField required
                                               id={"outlined-required"}
                                               label={"CategoryName"}
                                               defaultValue={"CategoryName"}
                                               onChange={(event) => changeNewData(event.target.value,"CategoryName")}
                                    />
                                    <TextField required
                                               id={"outlined-required"}
                                               label={"VCName"}
                                               defaultValue={"VCName"}
                                               onChange={(event) => changeNewData(event.target.value,"VCName")}
                                    />
                                    <TextField required
                                               id={"outlined-required"}
                                               label={"VCLimit"}
                                               type={"number"}
                                               defaultValue={1}
                                               onChange={(event) => changeNewData(event.target.value,"VCLimit")}
                                    />
                                    <Button variant={"contained"} sx={{margin:"auto 0 auto 0",position:"absolute",top:"50%",transform:"translate(0,-50%)",backgroundColor:"#007AB7"}}  onClick={addData}>
                                        <AddIcon/>
                                    </Button>
                                </Box>
                                <Button variant={"contained"} sx={{margin:"15px 0 15px 0",backgroundColor:"#007AB7"}}  onClick={deletedata}>
                                    <DeleteIcon/>
                                </Button>
                            </div>
                            <DataGrid
                                columns={columns} rows={rows} checkboxSelection autoHeight disableSelectionOnClick onSelectionModelChange={(v)=>selectrows.current=v}/>
                        </div>
                    </div>
                </Drawer_dashboard>
            </div>
        </React.Fragment>
    );
}

export default DashboardVC;