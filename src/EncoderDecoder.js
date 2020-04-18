import React from 'react';
import './EncoderDecoder.css';
import { characterEncodingMap, characterDecodingMap } from './utils';

class EncoderDecoder extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: '',
            convertedText: ''
        }
    }

    handleDecode = () => {
        console.log('decode', this.state.text);
        const text = this.state.text;
        let decodedText = '';
        let i = 0;
        while (i < text.length) {
            if (text[i] === '%' && typeof characterDecodingMap[text[i]+ text[i+1] + text[i+2]] !== 'undefined') {
                //TODO: For now we have simple characters encoded to 3 characters.
                decodedText += characterDecodingMap[text[i] + text[i+1] + text[i+2]];
                i += 3;
            } else {
                decodedText += text[i];
                i += 1;
            }
        }
        this.setState({
            convertedText: decodedText
        });
    }

    handleEncode = () =>  {
        console.log('encode');
        const text = this.state.text;
        let encodedText = '';
        for (let i = 0; i < text.length; i++) {
            if (typeof characterEncodingMap[text[i]] !== 'undefined') {
                encodedText += characterEncodingMap[text[i]];
            } else {
                encodedText += text[i];
            }
        }

        this.setState({
            convertedText: encodedText
        })
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render () {
        return (
            <div className='encoder-decoder-container'>
                <textarea type='text' value={this.state.text} onChange={this.handleChange} />
                <input type='button' onClick={this.handleEncode} value='Encode' />
                <input type='button' onClick={this.handleDecode} value='Decode' />
                <div>
                    <span>{this.state.convertedText}</span>
                </div>
            </div>
        );
    }
}

export default EncoderDecoder;