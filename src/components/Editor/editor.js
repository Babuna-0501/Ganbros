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
import { widgetStories, bugs, website, server } from "variables/general.js";
import GridItem from "components/Grid/GridItem.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import CustomInput from "components/CustomInput/CustomInput.js"

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
    <div className='e-wrapper'>
        <form onSubmit={this.handleSubmit}>
            <h3> Барааны нэр </h3><br/>
                       <GridItem xs={12} sm={12} md={8}>
          <CustomTabs
            headerColor="info"
            tabs={[
              {
                tabName: "Бэлэн",
                tabIcon: Cloud,
                tabTitle: "fff",
                tabContent: (
                  <div style={{display:'flex'}}>
                    <div>
                        <h4 className='type'>Төрөл &nbsp;
                          <CustomInput/>
                        </h4>
                        <h4 className='type'>Брэнд&nbsp;
                          <CustomInput/>
                        </h4>
                        <h4 className='type'>Хэмжээ&nbsp;
                          <CustomInput/>
                        </h4>
                        <h4 className='type'>Материал&nbsp;
                          <CustomInput/>
                        </h4>
                        <h4 className='type'>Үнэ&nbsp;
                          <CustomInput/>
                        </h4>
                    </div>
                    <div style={{marginLeft:'10vw'}}>
                      <br/><br/>
                       <h4>Зураг оруулах</h4>
                      <input type="file" onChange={this.fileSelectedHandler} ></input>
                      <br/><br/>
                    </div>
                  </div>
                )
              },
              {
                tabName: "Захиалга",
                tabIcon: Cloud,
                tabTitle: "fff",
                tabContent: (
                  <div>
                    <h4 className='type'>Төрөл &nbsp;
                      <CustomInput/>
                    </h4>
                    <h3 className='type'>Материал сонголт &nbsp; </h3>
                      <div class='type-grid'> 
                        <span>  <h4 className='type'>Хавтан &nbsp;
                          <CustomInput/>
                          </h4>
                        </span>
                         <span>  <h4 className='type'>Чулуу &nbsp;
                          <CustomInput/>
                          </h4>
                        </span>
                         <span>  <h4 className='type'>Гэрэл &nbsp;
                          <CustomInput/>
                          </h4>
                        </span>
                         <span>  <h4 className='type'>Нугас &nbsp;
                          <CustomInput/>
                          </h4>
                        </span>
                      </div>
                       <h3 className='type'>Захиалга хийгдэх хугацаа&nbsp; </h3>
                        <div className='type-wrapper'>  
                          <span>  <h5 className='type'>Хэмжээ авах &nbsp;
                            <CustomInput/>&nbsp;&nbsp;
                            </h5>
                          </span>
                          <span>  <h5 className='type'>Захиалга өгөх &nbsp;
                            <CustomInput/>&nbsp;&nbsp;
                            </h5>
                          </span>
                          <span>  <h5 className='type'>3D зураг гаргах &nbsp;
                            <CustomInput/>&nbsp;&nbsp;
                            </h5>
                          </span>
                          <span>  <h5 className='type'>Үйлдвэрлэл &nbsp;
                            <CustomInput/>&nbsp;&nbsp;
                            </h5>
                          </span>
                           <span>  <h5 className='type'>Суурилуулалт &nbsp;
                            <CustomInput/>&nbsp;&nbsp;
                            </h5>
                          </span>
                           <span>  <h5 className='type'>Засвар үйлчилгээ &nbsp;
                            <CustomInput/>&nbsp;&nbsp;
                            </h5>
                          </span>
                        </div>
                             <div>
                              <br/><br/>
                              <h4>Зураг оруулах</h4>
                              <input type="file" onChange={this.fileSelectedHandler} ></input>
                              <br/><br/>
                            </div>
                  </div>
                )
              },
            ]}
          />
          <div><input style={{width:'10rem', height:"3rem"}} type="submit" value="Publish"/></div>
        </GridItem>
        </form>
    </div>
    )
    
  }
  }
}