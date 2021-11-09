import moment from "moment";
import "moment/locale/id";
import { TGetBook } from "../../../../../../../types/book";
import * as El from "./DetailInfoElement";
import ImageResponsive from "../../../../../../otherComps/ImageResponsive";

const DetailInfo = ({ data }: { data: TGetBook }) => {
  const coverData = data.BookPicture.find((img) => img.type === "COVER");
  return (
    <El.Container>
      <El.Section>
        <El.CoverWrapper>
          <ImageResponsive
            src={coverData?.url}
            alt={data.title}
            height={290}
            width={200}
            quality={75}
            defaultIcon="dapurkata"
          />
        </El.CoverWrapper>
      </El.Section>

      <El.Section>
        <El.TextWrapper>
          <El.Label>id</El.Label>
          <El.Value>{data.id}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Judul</El.Label>
          <El.Value>{data.title}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Pengarang</El.Label>
          <El.Value>{data.Author.name}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Deskripsi</El.Label>
          <El.Value>{data.description}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Edisi</El.Label>
          <El.Value>{data.edition}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Harga</El.Label>
          <El.Value>{data.price}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Seri</El.Label>
          <El.Value>{data.series}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Tahun Rilis</El.Label>
          <El.Value>{data.releaseYear}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Halaman</El.Label>
          <El.Value>{data.numberOfPages}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Panjang</El.Label>
          <El.Value>{data.lenght}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Lebar</El.Label>
          <El.Value>{data.width}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Berat</El.Label>
          <El.Value>{data.weight}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Stok</El.Label>
          <El.Value>{data.stock}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Bahasa</El.Label>
          <El.Value>{data.language}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>ISBN</El.Label>
          <El.Value>{data.isbn}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Kategori </El.Label>
          <El.CategoryWrapper>
            {data.Category.map((value) => (
              <El.Category key={value.name}>{value.name}</El.Category>
            ))}
          </El.CategoryWrapper>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Update At</El.Label>
          <El.Value>
            {moment(data.updatedAt)
              .locale("id")
              .format("dddd, DD MMMM YYYY | HH:mm")}
          </El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Create At</El.Label>
          <El.Value>
            {moment(data.createdAt)
              .locale("id")
              .format("dddd, DD MMMM YYYY | HH:mm")}
          </El.Value>
        </El.TextWrapper>
      </El.Section>
    </El.Container>
  );
};

export default DetailInfo;
