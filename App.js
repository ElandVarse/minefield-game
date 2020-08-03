import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import params from './src/params'
import Minefield from './src/Components/Minefield'
import Header from './src/Components/Header'
import LevelSelection from './src/screens/LevelSelection'

import { 
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed

} from './src/functions'
 
export default class App extends Component {

    constructor(props){
        super(props)
        this.state = this.createState()
    }

    //Function to define the amount of mines in the board
    minesAmount = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return Math.ceil(cols * rows * params.difficultLevel)
    }

    createState = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return {
            board: createMinedBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
            showLevelSelection: false,
        }
    }

    onOpenField = (row, column) => {
        const board = cloneBoard(this.state.board)
        openField(board, row, column)
        const lost = hadExplosion(board)
        const won = wonGame(board)
        
        if(lost){
            showMines(board)
            Alert.alert('Perdeuuuu', "BURRÃO KKKKKKKKK" )
        }

        if(won) {
            Alert.alert('ganho', 'parabein')
        }

        this.setState({ board, lost, won })
    }

    //To Mark the flag
    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board)
        invertFlag(board, row, column )
        const won = wonGame(board)

        if(won) {
            Alert.alert('Parabéns', 'Você venceu')
        }
        
        this.setState({board, won})
    }

    onLevelSelected = level => {
        params.difficultLevel = level
        this.setState(this.createState())
    }

    render(){
        return (
            <View style={styles.container}>
                <LevelSelection isVisible={this.state.showLevelSelection}
                    onLevelSelected={this.onLevelSelected} 
                    onCancel ={() => this.setState({ showLevelSelection: false })}
                />

                <Header 
                    flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}  
                    onNewGame = {() => this.setState(this.createState()) }
                    onFlagPress = {() => this.setState({ showLevelSelection: true })} 
                />                
                
                <View style={styles.board}>    
                    <Minefield 
                        board={this.state.board} 
                        onOpenField={this.onOpenField}
                        onSelectField={this.onSelectField}
                    />
                </View>


                <StatusBar style="auto" />
            </View>
        );
    }   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    board:{
        alignItems: 'center',
        backgroundColor: '#AAA'
    }
})
