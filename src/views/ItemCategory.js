import { Typography, Card, Table, CardContent, Grid, TextField, Select, MenuItem, Button, Stack } from "@mui/material";
import { Col, Row } from "reactstrap";
// icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

const ItemCategory = () => {
    return (
        <div className="content">
            <Row>
                <Col md="4">
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                        Add Item Category
                                    </Typography>
                                </Grid>
                                <Grid container spacing={1}>

                                    <Grid xs={12} item>
                                        Item Category
                                        <TextField type='text' size='small' fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Description
                                        <TextField type="text" variant="outlined" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Stack direction='row-reverse'>
                                            <Button variant="contained">Save</Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card style={{ margin: "0 auto" }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                            Item Category List
                                        </Typography>
                                    </Grid>


                                    <Grid xs={12} sm={9} item>

                                        <TextField type="Search" placeholder="Search..." variant="outlined" size="small" />
                                    </Grid>


                                    <Grid xs={12} sm={3} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Search</th>
                                                    <th>Description</th>

                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                        </Table>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default ItemCategory;


