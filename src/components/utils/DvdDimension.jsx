function DvdDimension({ size, handleChange, error, errorMessage }) {
    return <>
        <div className="form-group">
            <label htmlFor="size" className="dimension">Size(MB)</label>
            <div>
                <input type="text" id="size" name="size" value={size} onChange={e => handleChange(e)} />
                {error && <p className="error">{errorMessage}</p>}
            </div>

        </div>
    </>
}

export default DvdDimension;