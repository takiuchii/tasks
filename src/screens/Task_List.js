import React, {Component} from "react"
import {StyleSheets, View, Text} from "react-native"

export default class TaskList extends Component{
    render(){
        return(
            <view>
                <text>Lista de Tarefas</text>
            </view>
        )
    }
}
const styles = StyleSheets.creat({
    container: {
        flex: 1
    }
})