function FurnitureDimension(props) {
    const { length, width, height, handleChange, errorLength, errorWidth, errorHeight, errorMessage } = props;

    return <>
        <div className="form-group">
            <label htmlFor="length" className="dimension">Length(CM)</label>
            <div>
                <input type="text" id="length" name="length" value={length} onChange={e => handleChange(e)} />
                {errorLength && <p className="error">{errorMessage}</p>}
            </div>

        </div>

        <div className="form-group">
            <label htmlFor="width" className="dimension">Width(CM)</label>
            <div>
                <input type="text" id="width" name="width" value={width} onChange={e => handleChange(e)} />
                {errorWidth && <p className="error">{errorMessage}</p>}
            </div>

        </div>

        <div className="form-group">
            <label htmlFor="height" className="dimension">Height(CM)</label>
            <div>
                <input type="text" id="height" name="height" value={height} onChange={e => handleChange(e)} />
                {errorHeight && <p className="error">{errorMessage}</p>}
            </div>

        </div>
    </>
}

export default FurnitureDimension;