import React, {useState} from 'react'
import {Circle} from '../AdminDashPics/icons'
import { green, blue } from '@material-ui/core/colors';


export const columns = [
  { Header: "Full Name", accessor: "name" },
  { Header: "Member Type", accessor: "type", Cell: props => <img src={props.data[props.row.id].type} height={60} width={60}/>},
  { Header: "Match", accessor: "match" },
  { Header: "City", accessor: "city" },
  { Header: "App", accessor: "application", Cell: props => <Circle color={"green"}/>},
  { Header: " BGC", accessor: "background", Cell: props => props.data[props.row.id].background? <Circle color={'green'} />: <Circle color={'red'} /> },
  { Header: "TRN", accessor: "training", Cell: props => props.data[props.row.id].training ? <Circle color={'green'} />: <Circle color={'red'} />}
];