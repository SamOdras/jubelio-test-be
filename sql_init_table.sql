CREATE TABLE db_test_jubelio.list_barang (
	product_name varchar(255) NULL,
	product_sku text NULL,
	product_image text NULL,
	product_price int4 NULL,
	product_detail text NOT NULL,
	product_no int4 NOT NULL,
	CONSTRAINT list_barang_pk PRIMARY KEY (product_no),
	CONSTRAINT list_barang_un UNIQUE (product_sku)
);