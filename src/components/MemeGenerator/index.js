import {Component} from 'react'
import {
  AppContainer,
  Heading,
  InputLabelContainer,
  Label,
  Input,
  GeneratorContainer,
  Select,
  Button,
  MemeContainer,
  StyledText,
  FormMemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    backgroundImageUrl: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizesOptionId: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
    activeFontSize: '',
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizesOptionId,
    } = this.state
    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSize: activeFontSizesOptionId,
    })
  }

  onChangeImageUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({activeFontSizesOptionId: event.target.value})
  }

  renderMeme = () => {
    const {backgroundImageUrl, topText, bottomText, activeFontSize} = this.state
    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <StyledText fontSize={activeFontSize}>{topText}</StyledText>
        <StyledText fontSize={activeFontSize}>{bottomText}</StyledText>
      </MemeContainer>
    )
  }

  renderGenerator = () => {
    const {
      backgroundImageUrlInput,
      activeFontSizesOptionId,
      topTextInput,
      bottomTextInput,
    } = this.state
    return (
      <GeneratorContainer onSubmit={this.onGenerateMeme}>
        <InputLabelContainer>
          <Label htmlFor="urlText">Image URL</Label>
          <br />
          <Input
            type="text"
            placeholder="Enter the Image URL"
            id="urlText"
            value={backgroundImageUrlInput}
            onChange={this.onChangeImageUrl}
          />
        </InputLabelContainer>
        <InputLabelContainer>
          <Label htmlFor="topText">Top Text</Label>
          <br />
          <Input
            type="text"
            placeholder="Enter the Top Text"
            id="topText"
            value={topTextInput}
            onChange={this.onChangeTopText}
          />
        </InputLabelContainer>
        <InputLabelContainer>
          <Label htmlFor="bottomText">Bottom Text</Label>
          <br />
          <Input
            type="text"
            placeholder="Enter the Bottom Text"
            id="bottomText"
            value={bottomTextInput}
            onChange={this.onChangeBottomText}
          />
        </InputLabelContainer>
        <InputLabelContainer>
          <Label htmlFor="select">Font Size</Label>
          <br />
          <Select
            value={activeFontSizesOptionId}
            onChange={this.onChangeOptionId}
            id="select"
          >
            {fontSizesOptionsList.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </Select>
        </InputLabelContainer>
        <Button type="submit">Generate</Button>
      </GeneratorContainer>
    )
  }

  render() {
    const {backgroundImageUrl} = this.state
    return (
      <AppContainer>
        <Heading>Meme Generator</Heading>
        <FormMemeContainer>
          {backgroundImageUrl ? this.renderMeme() : null}
          {this.renderGenerator()}
        </FormMemeContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
