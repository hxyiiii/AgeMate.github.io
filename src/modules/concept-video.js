import React from "react";
import { Typography } from "antd";
import { Layout, Row } from "antd";
import bigdemo from "../assets/bigdemo.mp4";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class ConceptVideo extends React.Component {
    render() {
        const CONTENT = {
            english: ( <
                div >
                Here 's our concept video: Teaching Seniors about smartphones, the thing we do best! <
                /div>
            ),
            chinese: ( <
                div > 这是我们的概念视频： 教老年人学会智能手机， 我们最擅长的事！ < /div>
            ),
        };

        return ( <
            div >
            <
            Content style = {
                { padding: "10px 10px 10px 10px" } } >

            <
            Row style = {
                {
                    width: "60%",
                    height: "auto",
                    display: "block",
                    margin: "auto",
                }
            } >
            <
            iframe src = { bigdemo }
            allowfullscreen = "allowfullscreen"
            width = "100%"
            height = "400px"
            frameborder = "0"
            sandbox = "allow-top-navigation allow-same-origin allow-forms allow-scripts"
            title = "concept-video" >
            < /iframe> <
            /Row>

            <
            Paragraph style = {
                { fontSize: "16px", textAlign: "center" } } > { CONTENT[this.props.language] } <
            /Paragraph> <
            /Content> <
            /div>
        );
    }
}