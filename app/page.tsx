import { Container, Filter, Title, TopBar } from "@/components/shared";
import { ProductCart } from "@/components/shared/product-cart";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Item } from "@radix-ui/react-select";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filter></Filter>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: 1,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 1,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    name: "Чизбургер-пицца",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
