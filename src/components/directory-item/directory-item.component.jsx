import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category
    return (
        <DirectoryItemContainer>
          <BackgroundImage imageUrl={imageUrl}>
          </BackgroundImage>
          <Body>
            <h1>{title}</h1>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
    )
}

export default CategoryItem