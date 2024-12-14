import './directory-item.styles.scss';

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category
    return (
        <div className="directory-item-container">
          <div className='background-image' style={{
              backgroundImage: `url(${imageUrl})`
          }}></div>
          <div className="directory-item-body">
            <h1>{title}</h1>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem