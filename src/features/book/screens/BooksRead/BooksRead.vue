<template>
	<div class="books-read">
		<CallOutComponent title="Hành trang kiến thức của bạn" />

		<div class="wrap-box box-read">
			<div class="box-left">
				<BoxHeader title="Tìm kiếm"> content </BoxHeader>
			</div>
			<div class="box-right bg-white shadow radius-5 box-table">
				<div class="box-header">Những cuốn sách đã đọc</div>
				<div class="box-body">
					<table>
						<tr>
							<th></th>
							<th>#</th>
							<th>Tên sách</th>
							<th>Ảnh</th>
							<th>Thời gian</th>
							<th>Ghi chú</th>
							<th></th>
						</tr>
						<tr>
							<td>
								<img :src="require('@/assets/images/checked.png')" alt="" />
							</td>
							<td>1</td>
							<td>Tạm biệt tôi của nhiều năm về trước</td>
							<td>
								<img
									src="https://i.ytimg.com/vi/_YqwxhM24K0/maxresdefault.jpg"
									width="100px"
									height="120px"
									alt=""
								/>
							</td>
							<td>03-07-2022</td>
							<td>
								<em>Những câu nói hay trong sách, cảm nhận</em>
							</td>
							<td>
								<router-link to="/book/1" class="btn-detail">
									<i class="fa-solid fa-book-bookmark"></i>
								</router-link>
							</td>
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
import BoxHeader from "@/components/BoxHeader/BoxHeader.vue";
import CallOutComponent from "@/components/CallOut/CallOutComponent.vue";
export default {
	components: { BoxHeader, CallOutComponent },
};
</script>

<style></style>
