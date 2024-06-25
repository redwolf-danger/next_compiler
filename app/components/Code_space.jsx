"use client"
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import "./question_page.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Code_Page from "./Code_Page";
import Blank from "./DOT";
import { useRef } from "react";

const Code_space = ({ submit_to_API }) => {
  const panel_div = useRef();

  return (
    <div>
      <div style={{border: "2px solid" }}>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={40} collapsible={true} minSize={20} style={{backgroundColor:"white"}}>
            QUESTION
          </Panel>
          <PanelResizeHandle
            onDragging={(dragging)=>{
              console.log('dragging: ', dragging)
            console.log("parnet is: ",panel_div.current.parentNode);
            let parent = panel_div.current.parentNode;
            console.log("state is ",parent.getAttribute("data-resize-handle-state"))
            panel_div.current.classList.toggle("panel_div_hover");
            }}
            tagName="div"><div
            ref = {panel_div}
            id = "panel_div"
            style={{width:"11px",height:"100%",backgroundColor:"whitesmoke" ,display:"flex", flexDirection:"column", gap:"3px",justifyContent:"center",alignItems:"center"}}>
              <Blank/>
              </div></PanelResizeHandle>
            
          <Panel minSize={30}
          defaultSize={60}
          // style={{ border: "2px solid" }}
          >
            <div>
              <Code_Page/>
            </div>
          </Panel>
        </PanelGroup>
      </div>


      {/* //todo starts */}
    
      {/* //todo ends */}

    
    </div>
  );

};

export default Code_space;


      {/* <PanelGroup direction="horizontal" 
      // style={{height:"100px"}}
      >
        <Panel defaultSize={30} minSize={20} >
          <div style={{backgroundColor:"orange",border:"1px solid", borderRadius:"5px",height:"100px"}}>
            left
          </div>
        </Panel>
        <PanelResizeHandle hitAreaMargins={{fine:0}} ><div id={"trial_panel"}></div></PanelResizeHandle>
        <Panel minSize={30}>
        <div style={{backgroundColor:"pink",border:"1px solid", borderRadius:"5px",height:"100px"}}>
            middle
          </div>
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={30} minSize={20}>
        <div style={{backgroundColor:"orange",border:"1px solid", borderRadius:"5px",height:"100px",marginLeft:"5px"}}>
            right
          </div>
        </Panel>
      </PanelGroup> */}
      {/* <div className="wrapper" style={{height:"30vh",display:"flex", flexGrow:1}}>
        <div style={{padding:"5px", flexGrow:1,width:position}}>question</div>
        <Blank style={{padding:"5px"}} isDragging = {isDragging} {...splitterProps}/>
        <div style={{ padding:"5px",flexGrow:1}}>editor</div> */}

      {/* <Blank className="left-block" style={{ width: position, backgroundColor:"silver"}}/>
      <Blank {...separatorProps} style={{backgroundColor:"black"}}/>
      <Blank className="right-block" style={{backgroundColor:"green"}}/> */}

      
      {/* </div> */}

{
  /* <textarea {...register("code_area")} cols="30" rows="10"></textarea> */
}
{
  /* <Box component={"div"}>
          <TextField
            sx={{ minWidth: "80vw" }}
            hiddenLabel
            defaultValue="Small"
            variant="filled"
            multiline
            minRows={20}
            maxRows={30}
          />
        </Box> */
}
{
  /*box commented for   */
}

{
  /*todo opens */
}
{
  /*todo closes  */
}
  {/* <form onSubmit={handleSubmit(onsubmit)}>
        <Language_Select props_for_select={props_for_select} />
        <Editor_section handleEditorChange={handleEditorChange} />
        <Button
          size="small"
          color="secondary"
          component="button"
          disableElevation
          variant="contained"
          onClick={(e) => {
            // console.log("submit btn clicked");
            // console.log("event was ", e);
            e.target.blur();
            handleSubmit(onsubmit)();
          }}
        >
          submit
        </Button>
      </form> */}
