import type {NextPage} from 'next'
import {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import dayjs from "dayjs";

const MsgList: NextPage = () => {
    const [dataList, setDataList] = useState([])
    const StatusEum = ['New', 'Processed']
    const getList = () => {
        axios.defaults.withCredentials = true;
        axios.get('https://api.servingrobot.co.uk:10000/msglist?token=my').then((res: any) => {
            setDataList(res.data)
        }).catch((e: any) => {
            console.log(e)
            alert("query error!")
        })
    }
    useEffect(getList, [])
    const updateMsg = (id: number, status: number) => {
        axios.post(`https://api.servingrobot.co.uk:10000/update?token=my&id=${id}&status=${status}`).then((res: any) => {
            getList()
            alert("successfully!")
        }).catch((e: any) => {
            console.log(e)
            alert("error!")
        })
    }
    const delMsg = (id: number) => {
        if (confirm("确定删除？")) {
            updateMsg(id, 3)
        }
    }
    return (
        <>
            <div className="section section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h2 className="title">Contact US Message List</h2>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>email</th>
                                <th>message</th>
                                <th>status</th>
                                <th>time</th>
                                <th>ip</th>
                                <th>actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {dataList.map((data: any, i: number) => {
                                let button = <button type="button" onClick={() => updateMsg(data.Id, 1)}>Mark as Processed</button>
                                if (data.Status == 1) {
                                    button = <button type="button" onClick={() => updateMsg(data.Id, 0)}>Unmark</button>
                                }
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{data.Firstname}</td>
                                        <td>{data.Lastname}</td>
                                        <td>{data.Email}</td>
                                        <td>{data.Message}</td>
                                        <td>{StatusEum[data.Status]}</td>
                                        <td>{dayjs(data.CreateTime).format('YYYY-MM-DD HH:mm')}</td>
                                        <td>{data.Ip}</td>
                                        <td>
                                            {button}
                                            <button type="button" onClick={() => delMsg(data.Id)} className="ml-3">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MsgList
