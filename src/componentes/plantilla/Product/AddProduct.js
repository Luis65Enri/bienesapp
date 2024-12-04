import React from 'react';

const ProductInformation = () => {
  return (
    <div className="content-wrapper-scroll">
      <div className="content-wrapper">
        <div className="row gx-3">
          <div className="col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Product Information</div>
              </div>
              <div className="card-body">
                <div className="row gx-3">
                  <div className="col-sm-6 col-12">
                    <GeneralInfo />
                  </div>
                  <div className="col-sm-6 col-12">
                    <MetaData />
                  </div>
                  <div className="col-sm-12 col-12">
                    <ProductImages />
                  </div>
                  <div className="col-sm-12 col-12">
                    <div className="custom-btn-group flex-end">
                      <button type="button" className="btn btn-light">Cancel</button>
                      <a href="products.html" className="btn btn-success">Add Product</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// General Info Component
const GeneralInfo = () => (
  <div className="card-border">
    <div className="card-border-title">General Information</div>
    <div className="card-border-body">
      <div className="row gx-3">
        <div className="col-sm-6 col-12">
          <div className="mb-3">
            <label className="form-label">Product Name <span className="text-red">*</span></label>
            <input type="text" className="form-control" placeholder="Enter Product Name" />
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="mb-3">
            <label className="form-label">Product Category <span className="text-red">*</span></label>
            <select className="form-control">
              <option>Select Product Category</option>
              <option>Mobiles</option>
              <option>Books</option>
              <option>Games</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="mb-3">
            <label className="form-label">Product Price <span className="text-red">*</span></label>
            <input type="text" className="form-control" placeholder="Enter Product Price" />
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="mb-3">
            <label className="form-label">Product Discount</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Set Product Discount" />
              <span className="input-group-text">%</span>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-12">
          <div className="mb-0">
            <label className="form-label">Product Description <span className="text-red">*</span></label>
            <textarea rows="4" className="form-control" placeholder="Enter Product Description"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Meta Data Component
const MetaData = () => (
  <div className="card-border">
    <div className="card-border-title">Meta Data</div>
    <div className="card-border-body">
      <div className="row gx-3">
        <div className="col-sm-6 col-12">
          <div className="mb-3">
            <label className="form-label">Meta Title <span className="text-red">*</span></label>
            <input type="text" className="form-control" placeholder="Enter Meta Title" />
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="mb-3">
            <label className="form-label">Meta Name <span className="text-red">*</span></label>
            <input type="text" className="form-control" placeholder="Enter Meta Name" />
          </div>
        </div>
        <div className="col-sm-12 col-12">
          <div className="mb-3">
            <label className="form-label">Meta Tags <span className="text-red">*</span></label>
            <input type="text" className="form-control" placeholder="Enter Meta Tags" />
          </div>
        </div>
        <div className="col-sm-12 col-12">
          <div className="mb-0">
            <label className="form-label">Meta Description <span className="text-red">*</span></label>
            <textarea rows="4" className="form-control" placeholder="Enter Meta Description"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Product Images Component
const ProductImages = () => (
  <div className="card-border">
    <div className="card-border-title">Product Images</div>
    <div className="card-border-body">
      <div id="dropzone" className="dropzone-dark">
        <form action="/upload" className="dropzone needsclick dz-clickable" id="demo-upload">
          <div className="dz-message needsclick">
            <button type="button" className="dz-button">
              Drop files here or click to upload.
            </button>
            <br />
            <span className="note needsclick">
              (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <div className="app-footer">
    <span>© Bootstrap Gallery 2023</span>
  </div>
);

export default ProductInformation;
