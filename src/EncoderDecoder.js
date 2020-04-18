import React from 'react';
import './EncoderDecoder.css';

class EncoderDecoder extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: '',
            convertedText: ''
        }
    }

    handleDecode () {
        console.log('decode');
    }

    handleEncode () {
        console.log('encode');
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
            </div>
        );
    }
}

export default EncoderDecoder;