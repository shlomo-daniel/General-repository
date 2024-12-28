function PageHeader({ title, description }) {
  return (
    <div className="row">
      <div className="col">
        <h1>{title}</h1>
        <div className="col">{description}</div>
      </div>
    </div>
  );
}

export default PageHeader;
