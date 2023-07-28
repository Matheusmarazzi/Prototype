import { useState, useEffect } from "react";


function Div(props){
  const [position, setPosition] = useState({ x: 600, y: 25 });
        const [isDragging, setIsDragging] = useState(false);
        const [dragStartCoordinates, setDragStartCoordinates] = useState({ x: 0, y: 0 });


        const [isOpen, setIsOpen] = useState(false);
        const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
        const [zIndex, setZIndex] = useState(1);




        function handleRightClick(event){
          event.preventDefault();
        

          setMenuPosition({ x: event.clientX, y: event.clientY });
          setIsOpen(true)
        
      }
      const handleDocumentClick = () => {
          setIsOpen(false);
      };
      useEffect(() => {
          document.addEventListener('click', handleDocumentClick);
          return () => {
            document.removeEventListener('click', handleDocumentClick);
          };
        }, []);
      
        const handleMouseDown = (event) => {
          setIsDragging(true);
          setDragStartCoordinates({ x: event.clientX, y: event.clientY });
        };
      
        const handleMouseMove = (event) => {
          if (!isDragging) return;
      
          const deltaX = event.clientX - dragStartCoordinates.x;
          const deltaY = event.clientY - dragStartCoordinates.y;
      
          setPosition((prevPosition) => ({
            x: prevPosition.x + deltaX,
            y: prevPosition.y + deltaY,
          }));
      
          setDragStartCoordinates({ x: event.clientX, y: event.clientY });
        };
      
        const handleMouseUp = () => {
          setIsDragging(false);
        };

   return(
    <>
      <div 
      style={{
        backgroundColor: props.color,
        height:`${props.hei}px`,
        width:`${props.wid}px`,
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor:"grab",
        borderRadius: `${props.radius}px`,
        border: `${props.borderSize}px solid ${props.border}`
        
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onContextMenu={handleRightClick}
        >
          
      </div>
        {isOpen && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'absolute',
              background: 'white',
              border: '1px solid black',
              borderRadius: '4px',
              padding: '5px',
              left: menuPosition.x,
              top: menuPosition.y,
              backgroundColor: '#e5e5e5',
               

              
            }}
            onClick={(event) => event.stopPropagation()} // Impede que o clique no menu feche o menu
          >
            <h5>profundidade:</h5>
            <button style={{padding: '8px'}} onClick={()=>setZIndex(zIndex+1)}>+</button>
              {zIndex}
            <button style={{padding: '8px'}} onClick={()=>{if(zIndex>0){{setZIndex(zIndex-1)}}}}   >-</button>
    
          </div>
        )}
    </>)
}
export default Div;