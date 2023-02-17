function BookDimension({ weight, handleChange, error, errorMessage }) {
    return <>
        <div className="form-group">
            <label htmlFor="weight" className="dimension">Weight(KG)</label>
            <div>
                <input type="text" id="weight" name="weight" value={weight} onChange={(e) => handleChange(e)} />
                {error && <p className="error">{errorMessage}</p>}
            </div>

        </div>
    </>
}

export default BookDimension;