export default function Borders(props) {
  return (
    <>
      <div className={`sverige sverige_${props.color} h-center`}>SVERIGE</div>
      <div id="borderLayout" className="sr__border z-layer__border h-center">
        <div className="sr__border-1" style={{ borderColor: props.color }}>
          <div className="sr__border-2" style={{ borderColor: props.color }}>
            {props.children}
          </div>
        </div>
      </div>
      {/* <div id="bottomMarker" className="sr__footer h-center z-layer__footer">
                        <div className="sr__footer-bg">
                            <div className="sr__footer-block">
                                SERVIA AB • <a href="tel:0770-16 16 16">0770-16 16 16</a>
                     
                            </div>
                        </div>
                        </div> */}
    </>
  );
}
