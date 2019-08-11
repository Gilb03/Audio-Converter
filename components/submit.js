const SubmitForm = () => (
    <div id="submit" style={{ 'backgroundColor': '#5e5949' }} className="section">
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <h3 className="title is-4 label">choose conversion types from ogg, wav, mp4, and mp3</h3>
          <form style={{ 'padding': '3px', 'textAlign': 'center' }} action="/upload" method="post" target="popupwindow" onSubmit="window.open('converting, 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
            <div className="field is-grouped">
              <div className="control is-expanded">
                <input className="input" type="email" name="email" id="tlemail" placeholder="Your file here" />
                <input type="file" value="1" name="embed" />
              </div> 
              <div className="control">
                <button className="button is-white">Convert</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .title {
          color: white;
          text-align: center;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
  
  export default SubmitForm