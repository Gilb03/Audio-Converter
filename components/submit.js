const SubmitForm = () => (
    <div id="submit" style={{ 'backgroundColor': '#5e5949' }} className="section">
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <h3 className="title is-4 label">choose conversion types from ogg, wav, mp4, and mp3</h3>
          <form style={{ 'padding': '3px', 'textAlign': 'center' }} action="../api/index" method="post" target="popupwindow" onSubmit="window.open('converting, 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
            <div className="field is-grouped">
              <div className="control is-expanded">
                <input className="input"  name="file" id="" placeholder="Your file here" />
                <input type="file" value="1" name="embed" />
              </div> 
              <div className="control">
                <button className="button is-white">Convert It</button>
        <select id="ftype" class="form-control" name="ftype">
            <optgroup label="audio">
                <option value="7">.aac</option>
                <option value="8">.m4a</option>
                <option value="4" selected="selected">.mp3 (128kb)</option>
                <option value="5">.mp3 (256kb)</option>
                <option value="6">.mp3 (320kb)</option>
                </optgroup><optgroup label="video">
                <option value="10">.3gp</option>
                <option value="2">.mp4</option>
                <option value="3">.mkv</option>
                <option value="9">.f4v</option>
                <option value="1">.webm</option>
            </optgroup> 
        </select>
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