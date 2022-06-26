<template>
	<div class="book-pending">
		<CallOutComponent />

		<div class="wrap-box box-pending">
			<div class="box-left">
				<BoxHeader title="Tìm kiếm">
					<router-link to="/book-action">
						<button class="btn btn-primary">
							<i class="fa-solid fa-plus"></i>
						</button>
					</router-link>
					<form class="group-search">
						<h3 class="title-form">Xắp xếp</h3>
						<div class="box-search">
							<label
								v-for="item in constantsCheckbox"
								:key="item.id"
								class="label-checkbox"
								:for="item.id"
							>
								<input type="checkbox" :id="item.id" />
								<span>{{ item.name }}</span>
							</label>
						</div>
						<div class="box-search">
							<div class="search-text">
								<input
									type="text"
									placeholder="Tìm kiếm"
									class="input-search"
								/>
								<button class="btn-search">Tìm</button>
							</div>
						</div>
					</form>
				</BoxHeader>
			</div>
			<div class="box-right bg-white shadow radius-5">
				<div class="box-header">Sách hay nên đọc</div>
				<div class="box-body">
					<table>
						<tr>
							<th>#</th>
							<th>Tên sách</th>
							<th>Ảnh</th>
							<th>Mô tả</th>
						</tr>
						<tr>
							<td>1</td>
							<td>Tạm biệt tôi của nhiều năm về trước</td>
							<td>
								<img
									src="https://i.ytimg.com/vi/_YqwxhM24K0/maxresdefault.jpg"
									width="180px"
									height="200px"
									alt=""
								/>
							</td>
							<td>Mô tả</td>
						</tr>
						<tr>
							<td>1</td>
							<td>Tạm biệt tôi của nhiều năm về trước</td>
							<td>
								<img
									src="https://i.ytimg.com/vi/_YqwxhM24K0/maxresdefault.jpg"
									width="180px"
									height="200px"
									alt=""
								/>
							</td>
							<td>Mô tả</td>
						</tr>
					</table>
				</div>
				<div class="box-footer">
					<ul class="paginate">
						<li class="item-page">1</li>
						<li class="item-page">2</li>
						<li class="item-page">3</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CallOutComponent from "@/components/CallOut/CallOutComponent.vue";
import BoxHeader from "@/components/BoxHeader/BoxHeader.vue";
import { CHECKBOX_SEARCH } from "./../../constants/book.constants";
export default {
	components: {
		CallOutComponent,
		BoxHeader,
	},
	data() {
		return {
			constantsCheckbox: CHECKBOX_SEARCH,
		};
	},
};
</script>

<style></style>
