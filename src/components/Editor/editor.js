import React from 'react'
import axios from 'axios';
import { 
  Editor ,
  left,
  center,
  right,
  justify,} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { EditorState ,ContentState ,convertFromHTML,convertToRaw, CompositeDecorator } from 'draft-js';
import './index.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Spinner from '../Spinner/Spinner';

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    
    width:"760px",
  
    // paddingLeft: "10px",
    // paddingRight: "10px",

  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
};
function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'Api url-aa end bichne uu');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('file', file);
      data.append('info', '{"a":5}');
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
       
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}
function uploadImageCallBack1(file, info) { 
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
    
      xhr.open('POST', 'Api url-aa end bichne uu');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('file', file);
      data.append('info', JSON.stringify(info));
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        if(response!="Amjiltai"){
        
      
        }
        else{
          window.location.reload();
        }
        
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      
      }
      );
      xhr.send(data);
     
     
    }
    
   
  )
  
 
  
  
}
export default class EditorImage extends React.Component {
  constructor(props) {
    super(props);
  this.state ={
    title:'',
    category:0,
    categoryName:"",
    radio:'TRUE',
    selectFile:'',
    type:'',
    file:'',
    image:'xczxc.jpg',
    text:EditorState.createEmpty(),
    isLoaded:false,
}
  }
componentDidMount(){
  var str = window.location.pathname;
  str = str.split("/")[3];
  if(str!=null){
    fetch(`http://localhost:3050/news/${str}`)
      .then(res=>res.json())
      .then(json=>{
       
        const blocksFromHTML = convertFromHTML(json.data.news[0].text);
        console.log("news[0]",blocksFromHTML.contentBlocks);
        console.log("news[1]",blocksFromHTML.entityMap);
        var a= EditorState.createWithContent(ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap  
        )
      );
          this.setState({ 
              title:json.data.news[0].title,
              category:json.data.news[0].categoryid,
              image:json.data.news[0].image,
              text:a,
              che:json.data.news[0].che,
              id:json.data.news[0].id
          })
          
        })
      // .then(()=>{
      //   var a= EditorState.createWithContent(ContentState.createFromBlockArray(
      //     blocksFromHTML.contentBlocks,
      //     blocksFromHTML.entityMap  
      //   )
      // ) 
      // })  
    }
    else{
      this.setState({ 
        title:'',
        category:0,
        categoryName:"",
        radio:'TRUE',
        selectFile:'',
        type:'',
        file:[],
        image:'xczxc.jpg',
        text:EditorState.createEmpty()
    })
    }
}
handleSubmit = (e) => {
  var str = window.location.pathname;
  str = str.split("/")[3];
  e.preventDefault();
  if(str!=null){
    console.log("prev");
    e.preventDefault();
      var a=this.state;
      a.file = null;
      // this.state.type=this.state.selectFile.type;
      var convertedData = convertToRaw(this.state.text.getCurrentContent())
      var news=draftToHtml(convertedData);
      this.state.news=news;
      const formData = new FormData();
      formData.append('news',JSON.stringify(a));
      const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
      };
      axios.post("http://localhost:3050/news/update",formData,config)
      .then((response) => {
     
      }).catch((error) => {
      });
    }
    else {
      {
        console.log('A0');
      e.preventDefault();
      this.state.type=this.state.selectFile.type;
      var convertedData = convertToRaw(this.state.text.getCurrentContent())
      var news=draftToHtml(convertedData);
      
      console.log('A1', convertedData);
      console.log('A2', news);
      this.state.news=news;
      var file = this.state.file;
      var a=this.state;
      a.file = null;
      
      this.setState({isLoaded:true})
      uploadImageCallBack1(file, a) 
        
     
      }
    }
}
handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}
onChange = (text) => this.setState({text});
handleTitleChange=(e)=>{
  this.setState({title:e.target.value})
}
handleCategoryChange=(e)=>{
  var category = JSON.parse(e.target.value);
  this.setState({category:category.number,categoryName:category.name});
}
handleRadioChange=(e)=>{
  this.setState({radio:e.target.value})
}

fileSelectedHandler=(e)=>{
   this.state.selectFile=e.target.files[0];
   const file = this.state.selectFile;
  this.setState({file:file})
 }
afterSubmission(e) {
  this.setState ({
      storedItemName:this.state.itemName
  }, function() {
      alert(this.state.storedItemName); // Shows the right value!
  });
}
render() {
  var { isLoaded  }= this.state;
        if(isLoaded==true){
          return <Spinner/>
      }
      else{
          return(
    <div>
        <form onSubmit={this.handleSubmit}>
            <h3> Барааны нэр </h3><br/>
            <input type="text" onChange={this.handleTitleChange} name="title" value={this.state.title} /><br/><br/>
            <input type="radio"  onChange={this.handleRadioChange} name="m" value="TRUE" />Бэлэн
            <input type="radio" onChange={this.handleRadioChange}  name="m" value="FALSE" />Захиалга<br/><br/>
            <div style={{display: "flex", flexWrap:"wrap", flexDirection:"row"}}>
              <h4>Төрөл сонгох</h4>
              <select name="cate" onChange={this.handleCategoryChange} form="category" style={{width: "150px", height: "30px",marginLeft: "10px",marginTop: "10px"}}>
                  <option value='{"name":"Ширээ", "number":"0"}'>Ширээ</option>
                  <option value='{"name":"Сандал", "number":1}'>Сандал</option>
                  <option value='{"name":"Тавиур", "number":2}'>Тавиур</option>
            </select>
            <h4 style={{marginLeft: "50px"}}>Брэнд сонгох</h4>
              <select name="cate" onChange={this.handleCategoryChange} form="category" style={{width: "150px", height: "30px",marginLeft: "10px",marginTop: "10px"}}>
                  <option value='{"brand":"Alberta", "number":"0"}'>Alberta</option>
                  <option value='{"brand":"Poltrona Frau - Renzo Frau", "number":1}'>Poltrona Frau - Renzo Frau</option>
                  <option value='{"brand":"Misura Emme", "number":2}'>Misura Emme</option>
            </select>
            </div>
            <div style={{display: "flex", flexWrap:"wrap", flexDirection:"row"}}>
              <h4>Үйлдвэрлэх хугацаа</h4>
                <select name="cate" onChange={this.handleCategoryChange} form="category" style={{width: "150px", height: "30px",marginLeft: "10px",marginTop: "10px"}}>
                    <option value='{"brand":""3-5"", "number":"0"}'>3-5 хоног</option>
                    <option value='{"brand":"7", "number":1}'>7 хоног</option>
                    <option value='{"brand":"10-15", "number":2}'>10-15 хоног</option>
                </select>
              <h4 style={{marginLeft: "50px"}}>Хүргэлт хийгдэх хугацаа</h4>
                <select name="cate" onChange={this.handleCategoryChange} form="category" style={{width: "150px", height: "30px",marginLeft: "10px",marginTop: "10px"}}>
                    <option value='{"brand":"Alberta", "number":"0"}'>1</option>
                    <option value='{"brand":"Poltrona Frau - Renzo Frau", "number":1}'>2</option>
                    <option value='{"brand":"Misura Emme", "number":2}'>3</option>
                    <option value='{"brand":"Misura Emme", "number":2}'>4</option>
                    <option value='{"brand":"Misura Emme", "number":2}'>5</option>
              </select>
            </div>
      
          
    
           <br/><br/>
           <input type="file" onChange={this.fileSelectedHandler} ></input>
           <br/><br/>
       
        <div style={styles.editor}>
          <Editor
            editorState={this.state.text}
            toolbarClassName="toolbarClassName"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbarClassName="toolbar-class"
            onEditorStateChange={this.onChange}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: {
                inDropdown: true,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['justify','left', 'center', 'right' ],
                justify: { icon: justify, className: undefined },
                left: { icon: left, className: undefined },
                center: { icon: center, className: undefined },
                right: { icon: right, className: undefined },
               
              },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
            }}
            />
          
        </div>
        <br/>
        <input type="submit" value="Publish"/>
        </form>
    </div>
    )
    
  }
  }
}